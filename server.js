var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles= {
    'article-One': {
        title: 'Article One | Vaibhav Kedia',
        heading : 'Article One',
        date: 'Apr 24, 2018',
        content: ` <p>
                        This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.
                    </p>
                    <p>
                        This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.
                    </p>
                    <p>
                        This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.This is the content for article one.
                    </p>`
    },
    'article-Two': {
        title: 'Article Two | Vaibhav Kedia',
        heading: 'Article Two',
        date: 'Apr 25, 2018',
        content: ` <p>
                         Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. 
                     </p>
                     <p>
                         Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. 
                     </p>
                     <p>
                         Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. 
                     </p>
                     <p>
                         Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. Article two content. 
                     </p>`
    },
    'article-Three': {
        title: 'Article Three | Vaibhav Kedia',
        heading: 'Article Three',
        date: 'Apr 26, 2018',
        content: ` <p>
                    Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. 
                    </p>
                    <p>
                    Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. Content Article Three. 
                    </p>`
    }
};
function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmlTemplate=`
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
