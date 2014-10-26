module.exports.parse = function javamal(postContent, callback) {
    postContent = postContent.replace(/""/g, '<a href="javascript:hideshow('javamal')"><iframe width="1400" height="600" src="http://hanaone.com/turtle3d"></iframe>');
    callback(null, postContent);
};

function hideshow(javamal) {
    document.all.javamal.style.display = "none";
    var obj = eval("document.all." + javamal);
    obj.style.display = "block"
    }
