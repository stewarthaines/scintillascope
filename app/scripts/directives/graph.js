'use strict';

angular.module('scintillascope')
.directive('graph', function () {
	var _running = false,
	_context,
	camera,
	scene,
	renderer,
	geometry,
	material,
	mesh,
	_requestAnimFrame,
	_tick,
	_width,
	_height,
	_twoPi = Math.PI * 2;

	var draw = function drawFn() {
		console.log('draw');

		renderer.render( scene, camera );
		/*
		_context.save();

		_context.clearRect(0, 0, _width, _height);

		_context.arc(_width / 2, _height / 2, _height / 2, 0, _twoPi, false);
		_context.fillStyle = '#ff0000';
		_context.fill();

		_context.restore();
		*/

		/* http://stemkoski.github.io/Three.js/Texture-Animation.html */
	};

	_requestAnimFrame = (function () {
		return window.requestAnimationFrame       ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			window.oRequestAnimationFrame      ||
			window.msRequestAnimationFrame     ||
			function (callback) {
				_setTimeout(callback, 1000 / 60);
			};
	}());
/*
	_animLoop = function animLoopFn() {
		if (_running === true) {
			_tick();
		}
	};
*/
	_tick = function _tickFn() {
		if (_running == false) {
			return;
		}
		draw();
		console.log(_running);
		if (_running == true) {
			_requestAnimFrame(_tick);
		}
	};


	var start = function startFn() {
		console.log('start');
		_running = true;
		_requestAnimFrame(_tick);
	};

	var stop = function stopFn() {
		console.log('stop');
		_running = false;
	};

	return {
		/*template: '<div></div>',*/
		restrict: 'A',
		/*controller: [ '$scope', function( $scope ) {
		}],*/
		scope: {
			running: '=running'
		},
		link: function postLink(scope, element, attrs) {
			console.log('this is the graph directive');

			attrs.$observe('running', function(value) {
				console.log('running is now: ' + value);
				if (value == 'false' || value == false) {
					stop();
				} else {
					start();
				}

				//_running = (value === 'true' ? true : false);
				//_tick();
			});

			//_context = element[0].getContext('2d');

			camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
			camera.position.z = 1000;

			scene = new THREE.Scene();

			geometry = new THREE.BoxGeometry( 200, 200, 200 );
			material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: false } );

			mesh = new THREE.Mesh( geometry, material );
			scene.add( mesh );

			renderer = new THREE.WebGLRenderer({
				antialias: false,
/*				webkitImageSmoothingEnabled: false,
				imageSmoothingEnabled: false,*/
				preserveDrawingBuffer: true,
				canvas: element[0]
			});

			//var c = element[0].getContext('webgl');
			//c.imageSmoothingEnabled = false;
			renderer.getContext().imageSmoothingEnabled = false;
			console.log(renderer);

			renderer.autoClearColor = false;

			attrs.$observe('running', function(newValue) {
				if (newValue) {
					/* drawing */
				} else {
					/* not drawing */
				}
				_running = newValue;
			});

			attrs.$observe('project', function(newValue) {
				console.log(newValue);
			});

			attrs.$observe('size', function(newValue) {
				console.log(newValue);
				/* only use value is we can parse a width and height from it */
				var size = newValue.split('x');
				if (size.length === 2) {
					var width = parseInt(size[0], 10);
					var height = parseInt(size[1], 10);
					if (width > 0 && height > 0) {
						_width = width;
						_height = height;

						renderer.setSize( _width, _height );

/*						element.attr({
							width: _width,
							height: _height
						});*/
						// resizing shouldn't clear the canvas
						// so we might have to do some work to preserve
						// what has already been drawn
						/*element.css({
							width: window.innerWidth,
							height: window.innerHeight
						});*/
						draw();
					}
				}
			});
		}
	};
});
