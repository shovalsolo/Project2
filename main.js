// // var p = 0;// function addCart(){// if(p==1){// p=0;// document.getElementById('cart').innerHTML="0";//}else{// p=1;// document.getElementById('cart').innerHTML="1";//}//}var p1=0;function addCart(){p1++;document.getElementById("cart").innerHTML=p1}if($(window).width() < 600){console.log('1');$('.slide').bxSlider({maxSlides:1,minSlides:1,slideWidth:300,slideMargin:10})}else if($(window).width() < 1000){console.log('2');$('.slide').bxSlider({maxSlides:2,minSlides:2,slideWidth:300,slideMargin:10})}else{console.log('3');$('.slide').bxSlider({maxSlides:4,minSlides:4,slideWidth:300,slideMargin:10})}function ValidateEmail(inputText){var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;if(inputText.value.match(mailformat)){document.form1.subscribe.focus();return true}else{alert("You have entered an invalid email address!");document.form1.subscribe.focus();return false}}var gulp = require('gulp');var concat = require('gulp-concat');var uglifycss = require('gulp-uglifycss');var browserSync = require('browser-sync').create();var reload = browserSync.reload;gulp.task('all',function(){gulp.src('*.css') .pipe(concat('main.css')) .pipe(uglifycss({"uglyComments":true})) .pipe(gulp.dest(''));gulp.src('*.js') .pipe(concat('main.js')) .pipe(uglifycss({"uglyComments":true})) .pipe(gulp.dest(''))});gulp.task('css',function(){return gulp.src('*.css') .pipe(concat('main.css')) .pipe(uglifycss({"uglyComments":true})) .pipe(gulp.dest(''))});gulp.task('js',function(){return gulp.src('*.js') .pipe(concat('main.js')) .pipe(uglifycss({"uglyComments":true})) .pipe(gulp.dest(''))});gulp.task('browser-sync',function(){browserSync.init({server:{baseDir:"./"}});gulp.watch("*.html").on("change",reload)});