
$(document).ready(function() {

var userFeed = new Instafeed({
    get: 'user',
    userId: '6299132633',
    limit :5,
    resolution: 'standard_resolution',
    accessToken: '6299132633.1677ed0.2575432539554e00a4da7301eb3fec66',
    sortBy: 'most-recent',
    template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
});
userFeed.run();

});
