<template>
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css"
    />
    <div class="my-4 d-flex border" id="mypageForm">
        <div class="my-4" id="history">
            <div class="mb-5 text-center fw-bold fs-5">
                <i class="bi bi-house-door me-1" style="font-size: 45px"></i>
                <p>어셈블 내역</p>
            </div>
            <div class="hr"></div>
            <div class="nav justify-content-around">
                <div class="nav-item border">
                    <a class="nav-link active fw-bold" aria-current="page">신청 내역</a>
                </div>
                <div class="nav-item border">
                    <a class="nav-link fw-bold" aria-current="page">모집 내역</a>
                </div>
            </div>
            <div class="bg-light text-center" style="height: 500px">
                <div class="hr"></div>
                <div id="txt" class="text-secondary align-content-center" style="font-size: 14px">
                    <div>아직 신청한 어셈블이 없으시네요!</div>
                    <div class="mb-4">지금 바로 어셈블에 놀러가 보세요.</div>
                    <button
                        class="p-3 bg-black text-white rounded-1 fw-bold"
                        style="font-size: 14px; border: none"
                    >
                        어셈블 둘러보기
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
/* #mypageForm {
    width: 70%;
    margin: 0 auto;
} */

#history {
    width: 100%;
    margin: 0 auto;
}
#txt {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.hr {
    border-bottom: 1px solid lightgray;
}
.nav-link {
    text-align: center;
    width: 500px;
    color: gray;
}

.nav-link:focus {
    color: black;
    border-width: 100%;
    border-bottom: 3px solid black;
}

.nav {
    display: flex;
}
</style>
