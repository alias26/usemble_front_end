<template>
    <div class="mt-4 text-start border">
        <h3 class="fw-bold ms-3">김명환</h3>
        <p class="ms-3 mb-5" style="font-size: 12px">myeong1709@naver.com</p>

        <ul class="nav flex-column text-start" id="tab-bar">
            <li class="nav-item">
                <a class="nav-link active mb-3" id="click-mypage" aria-current="page">마이페이지</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-black"><strong>어셈블 관리</strong></a>
            </li>
            <li class="nav-item">
                <RouterLink to="/mypage/AssembleHistory" class="nav-link" style="font-size: 14px">
                    내역
                </RouterLink>
            </li>
            <li class="nav-item mb-4">
                <RouterLink to="/mypage/AssembleLike" class="nav-link" style="font-size: 14px">
                    좋아요
                </RouterLink>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled text-black"><strong>계정 관리</strong></a>
            </li>
            <li class="nav-item">
                <RouterLink to="/mypage/ProfileUpdate" class="nav-link" style="font-size: 14px">
                    프로필 수정
                </RouterLink>
            </li>
            <li class="nav-item mb-4">
                <RouterLink to="/mypage/PrivacyInfo" class="nav-link" style="font-size: 14px">
                    개인정보 수정
                </RouterLink>
            </li>
            <li class="nav-item mb-3">
                <a class="nav-link text-black"><strong>로그아웃</strong></a>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useRouter } from "vue";
</script>

<style scoped>
#click-mypage {
    color: black;
    font-weight: bolder;
    text-decoration-line: underline;
    color: black;
}

.nav-link {
    color: gray;
}
</style>
