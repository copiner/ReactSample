const HTTP = require('http');
const URL = require("url");

let posts = require('./data/posts');
let users = require('./data/users');
let comments = require('./data/comments');

const server = HTTP.createServer(function(req, res){

	//设置允许跨域的域名，*代表允许任意域名跨域
	res.setHeader("Access-Control-Allow-Origin","*");
	//跨域允许的header类型
	res.setHeader("Access-Control-Allow-Headers","Content-type,Content-Length,Authorization,Accept,X-Requested-Width");
	//跨域允许的请求方式
	res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	//设置响应头信息
	res.setHeader("X-Powered-By",' 3.2.1');
	//让options请求快速返回
	if(req.method == "OPTIONS"){
		return res.end();
	}

	let _url = URL.parse(req.url, true).pathname;
	
  if(_url.substring(0, 6) == '/users'){
    res.end(JSON.stringify(users));
  } else if(_url.substring(0, 9) == '/comments'){
    res.end(JSON.stringify(comments));
  } else if(_url.substring(0, 6) == '/posts'){

    req.on('data', function (data) {
        handlePosts(data, res);
    });
    req.on('end', function () {

    });

	} else {
		res.writeHead(404, {"Content-Type": "application/json"});
		res.end(JSON.stringify({error: "unknown-resource"}));
	}

});

let handlePosts = (data, res) => {
	//console.log(data.toString());
	data = JSON.parse(data)
	let oPosts = posts.filter(function(item){
		return item.userId == data.userId;
	})

	res.end(JSON.stringify(oPosts));
}

const hostname = '127.0.0.1';
const port = 9001;
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
