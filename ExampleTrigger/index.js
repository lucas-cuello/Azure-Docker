module.exports = async function (context, req) {


    context.log('JavaScript HTTP trigger function processed a request.');

    const phrases = [
        "Life is just a chance to grow a soul. - A. Powell Davies",
        "Only a life lived for others is a life worthwhile. - Albert Einstein",
        "Expect nothing, live frugally on surprise. - Alice Walker",
        "Because I have loved life, I shall have no sorrow to die. - Amelia Burr",
        "People living deeply have no fear of death. - Anais Nin",
        "Everything has beauty, but not everyone sees it. - Confucius",
        "If you obey all the rules, you miss all the fun. - Katherine Hepburn",
        "The good life is inspired by love and guided by knowledge. - Bertrand Russell",
        "Our lives are like a candle in the wind. - Carl Sandburg",
        "Be a voice not an echo. - Unknown"
    ]

    if (req.query.name || (req.body && req.body.name)) {
        if(req.query.withPhrase === "true" || (req.body && req.body.withPhrase === "true" )){

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + (req.query.name || req.body.name) + ", remember... " + phrases[Math.floor(Math.random() * 10)]
        }
        }else {
            context.res = {
                // status: 200, /* Defaults to 200 */
                body: "Hello " + (req.query.name || req.body.name) 
            }
        }

    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};