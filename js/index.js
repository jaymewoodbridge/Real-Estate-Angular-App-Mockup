var app = angular.module("app", []);

app.controller('mainController', function($scope) {
  $scope.housing = [
    {
      'img': 'http://cometothestableconcert.com/wp-content/uploads/2015/11/beautifull-breathtaking-beautiful-modern-houses-ideas-in-exterior-contemporary-design-ideas-with-beige-exterior-beige-siding-concrete-driveway-frosted.jpg',
      'address': '964 NW Ave, Miami',
      'cost': 1000000
    },
    {
      'img': 'http://cdn.designrulz.com/wp-content/uploads/2014/05/designrulz-cage-house-1.jpg',
      'address': '105 Danger St, Malibu',
      'cost': 900000
    },
    {
      'img': 'http://homedsgn.online/wp-content/uploads/2015/07/beautiful-modern-houses-pictures-luxury-tropical-house-most-the-world.jpg',
      'address': '360 Everythinggonnabealright Dr, Jamaica',
      'cost': 750000
    },
    {
      'img': 'http://4.bp.blogspot.com/-rXpxcSqn6_U/UUhCOGJcpeI/AAAAAAAAD0o/wD04w0DfH5U/s1600/Contamporary+Glass+House+by+Nico+Van+Der+Meulen+Architects+Johannesburg+South+Africa+1.jpg',
      'address': '4567 Parkway, Beverly Hills',
      'cost': 2000000
    }
  ];
});