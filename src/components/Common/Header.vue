<template>
    <nav>
        <div id="leftmenu">
            <RouterLink class="mx-4 nav_text" to="/list">어셈블 둘러보기</RouterLink>
            <RouterLink id="usemble" class="mx-4" to="/social/write">어셈블!</RouterLink>
        </div>
        <RouterLink to="/"><img id="logoimg" alt="Vue logo" src="@/assets/logo.png" /></RouterLink>
        <div id="rightmenu">
            <RouterLink to="/search">
                <button class="btn" style="border: none; outline: none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-search"
                        viewBox="0 0 16 24"
                    >
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                        />
                    </svg>
                </button>
            </RouterLink>
            <div class="d-flex" v-if="$store.state.mid === ''">
                <RouterLink to="/login" class="mx-4 nav_text">로그인</RouterLink>
                <span class="nav_text">|</span>
                <RouterLink to="/join" class="mx-4 nav_text">회원가입</RouterLink>
            </div>
            <div v-if="$store.state.mid !== ''">
                <RouterLink v-if="$store.state.mrole === 'ROLE_ADMIN'" class="nav_text" to="/admin"
                    >관리자페이지</RouterLink
                >
                <RouterLink
                    v-if="$store.state.mrole === 'ROLE_USER'"
                    class="nav_text ms-4"
                    to="/myPage"
                    >마이페이지</RouterLink
                >
                <button
                    @click="handleLogout"
                    class="mx-4"
                    style="border: none; background-color: white; font-weight: 900; font-size: 17px"
                >
                    로그아웃
                </button>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

function handleLogout() {
    store.dispatch("deleteAuth");
    router.push("/");
}
</script>

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
}
#leftmenu {
    height: 80px;
    display: flex;
    float: left;
    margin-right: 25px;
}
#usemble {
    color: #00a3e0;
    margin-top: 30px;
}

.nav_text {
    margin-top: 30px;
}
</style>
