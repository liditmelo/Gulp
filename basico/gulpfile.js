const gulp = require ('gulp');
const {series, parallel} = require ('gulp');

function copiar(cb)
{
    console.log('tarefa de copiar');
    //gulp.src('pastaA/**/*.txt)
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
        .pipe(gulp.dest('pastaB'));
    return cb();
}

const antes1 = cb => {
    console.log('antes 1');
    return cb();
}

const antes2 = cb => {
    console.log('antes 2');
    return cb();
}

const fim = cb => {
    console.log('tarefa fim');
    return cb();
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim
);