module.exports.parse = function(postContent, callback) {
    postContent = postContent.replace(/<a href="(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)<\/a>/g, '<iframe class="youtube-plugin" width="640" height="360" src="http://www.youtube.com/embed/$1" frameborder="0" allowfullscreen></iframe>');
    callback(null, postContent);
};

function fold(code, index, isFolded){
    if(isFolded){
        
    }
}
