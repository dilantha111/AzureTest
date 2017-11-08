module.exports = function (context, input,req) {
    var documents = context.bindings.documents;
    context.res = {
        status: 200,
        body: JSON.stringify(documents)
    }

    context.done();
}
