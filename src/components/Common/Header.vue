<template>
    <nav>
        <div id="leftmenu">
            <RouterLink id="nav_text" class="mx-4" to="/list">어셈블 둘러보기</RouterLink>
            <RouterLink id="usemble" class="mx-4" to="/social/write/base">어셈블!</RouterLink>
        </div>
        <RouterLink to="/"><img id="logoimg" alt="Vue logo" src="@/assets/logo.png" /></RouterLink>
        <div id="rightmenu">
            <RouterLink to="/login" id="nav_text" class="mx-4">로그인</RouterLink>
            <span>|</span>
            <RouterLink to="/join/joinMember" id="nav_text" class="mx-4" href="#"
                >회원가입</RouterLink
            >
            <RouterLink to="/admin">admin</RouterLink>
            <RouterLink class="ms-4" to="/myPage">user</RouterLink>
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
</style>
