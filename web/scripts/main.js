// var userFeed = new Instafeed({
//     get: 'tagged',
//     tagName: 'sznspaceapps',
//     clientId: '1cba0ab6ff7d485e85805691b664226e',
//     accessToken: '4232131504.1cba0ab.38f1f0bd2b884ccd91453b400a35536f'
//   });
//   userFeed.run();

  var token = '4232131504.1cba0ab.38f1f0bd2b884ccd91453b400a35536f',
    num_photos = 4, // maximum 20
    container = document.getElementById( 'instafeed' ),
    scrElement = document.createElement( 'script' );
 
window.mishaProcessResult = function( data ) {
	for( x in data.data ){
		container.innerHTML += '<img src="' + data.data[x].images.low_resolution.url + '">';
	}
}
 
scrElement.setAttribute( 'src', 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + token + '&count=' + num_photos + '&callback=mishaProcessResult' );
document.body.appendChild( scrElement );
