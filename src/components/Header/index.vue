<template>
    <!--
    이미지 가운데 두기
     <nav>
        <div id="nav2">
            <ul>
                <li><a href="#">어셈블 둘러보기</a></li>
                <li><a id="usemble" href="#">어셈블!</a></li>
            </ul>
        </div>
        <img alt="Vue logo" src="../../assets/logo.png" />
        <div id="login_join">
            <a class="mx-4" href="#">로그인</a>
            <span>|</span>
            <a class="mx-4" href="#">회원가입</a>
        </div>
    </nav> -->
    <nav>
        <div id="leftmenu">
            <a id="nav_text" class="mx-4" href="#">어셈블 둘러보기</a>
            <a id="usemble" class="mx-4" href="#">어셈블!</a>
        </div>
        <img id="logoimg" alt="Vue logo" src="../../assets/logo.png" />
        <div id="rightmenu">
            <a id="nav_text" class="mx-4" href="#">로그인</a>
            <span>|</span>
            <a id="nav_text" class="mx-4" href="#">회원가입</a>
        </div>
    </nav>
</template>

<script setup></script>

<style scoped>
* {
    padding: 0;
    margin: 0;
    height: 80px;
}
nav {
    width: 70%;
    height: 80px;
    margin: 0px auto;
    min-width: 700px;
    text-align: center;
}
a {
    text-decoration: none;
    color: black;
    font-size: 17px;
    height: 80px;
    font-weight: 900;
}
#logoimg {
    width: 80px;
}
#rightmenu {
    height: 80px;
    display: flex;
    float: right;
    margin-top: 30px;
}
#leftmenu {
    height: 80px;
    display: flex;
    float: left;
    margin-top: 30px;
}
#usemble {
    color: #00a3e0;
}
/*
이미지 가운데 두기
 * {
    padding: 0;
    margin: 0;
}
ul,
ol {
    list-style: none;
}

a {
    text-decoration: none;
    color: black;
    font-size: 17px;
}
#usemble {
    color: #00a3e0;
}

img {
    width: 145px;
    height: 80px;
    padding: 0 30px;
    margin: auto;
}

nav {
    display: flex;
    width: 70%;
    overflow: hidden;
    height: 80px;
    background-color: #ffffff;
    margin: 0px auto;
}

#nav2 > a {
    display: block;
    float: left;
    font-size: 30px;
    font-weight: 900;
    line-height: 80px;
    padding: 0 30px;
}

#nav2 > ul {
    float: right;
}

#nav2 > ul li {
    float: left;
    line-height: 80px;
    margin-left: 30px;
}
#login_join {
    float: right;
    line-height: 80px;
}

#menu {
    display: flex;
} */
</style>
