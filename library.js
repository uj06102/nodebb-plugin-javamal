module.exports.parse = function(postContent, callback) {
    postContent = postContent.replace(/<a href="(?:https?:\/\/)?(?:www\.)?(.+)<\/a>/g, '<iframe class="youtube-plugin" width="640" height="360" src="http://hanaone.com/turtle3d" frameborder="0" allowfullscreen></iframe>');
    callback(null, postContent);
};
