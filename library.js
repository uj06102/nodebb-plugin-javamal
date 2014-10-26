module.exports.parse = function javamal(postContent, callback) {
    postContent = postContent.replace(/<tr><td><a href="javascript:hideshow('javamal')">자바말<\/a><\/td><\/tr>/g, '<iframe width="1400" height="600" src="http://hanaone.com/turtle3d"></iframe>');
    callback(null, postContent);
};

function hideshow(javamal) {
    document.all.javamal.style.display = "none";
    var obj = eval("document.all." + javamal);
    obj.style.display = "block"
    }
