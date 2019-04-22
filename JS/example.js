angular.module('plunker', ['ui.bootstrap']);

function CarouselDemoCtrl($scope) {
  $scope.myInterval = 5000;
  $scope.slides = [{
    image: 'http://placekitten.com/200/200',
    text: 'Kitten.'
  }, {
    image: 'http://placekitten.com/225/200',
    text: 'Kitty!'
  }, {
    image: 'http://placekitten.com/250/200',
    text: 'Cat.'
  }, {
    image: 'http://placekitten.com/275/200',
    text: 'Feline!'
  }, {
    image: 'http://placekitten.com/250/200',
    text: 'Cat.'
  }, {
    image: 'http://placekitten.com/275/200',
    text: 'Feline!'
  }];

  $scope.$watch('slides', function(values) {

    var i, a = [],
      b;

    for (i = 0; i < $scope.slides.length; i += 2) {
      b = {
        image1: $scope.slides[i]
      };

      if ($scope.slides[i + 1]) {
        b.image2 = $scope.slides[i + 1];
      }

      a.push(b);
    }

    $scope.groupedSlides = a;

  }, true);


  $scope.addSlide = function() {
    $scope.slides.push({
      image: 'http://placekitten.com/' + (200 + 25 * Math.floor(Math.random() * 4)) + '/200',
      text: ['More', 'Extra', 'Lots of', 'Surplus'][Math.floor(Math.random() * 4)] + ' ' + ['Cats', 'Kittys', 'Felines', 'Cutes'][Math.floor(Math.random() * 4)]
    });
  };
}