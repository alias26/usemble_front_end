<template>
    <div class="d-flex">
        <div id="pro" class="text-start">
            <div class="d-flex justify-content-between">
                <div class="mb-2 fs-4 fw-bolder">프로필</div>

                <div class="">
                    <button
                        class="btn border fw-bold"
                        style="font-size: 13px; width: 100px; height: 40px; border-color: lightgray"
                    >
                        프로필 수정
                    </button>
                </div>
            </div>

            <div class="d-flex">
                <img id="proimg" src="../../../assets/photo31.jpg" alt="" />

                <div class="d-flex flex-column mb-2 ps-4" style="width: 100%">
                    <div class="d-flex">
                        <div class="d-flex me-1">
                            <div class="me-1 rounded-pill fw-bold" id="ct-btn">모임</div>
                            <div class="me-1 rounded-pill fw-bold" id="ct-btn">운동</div>
                            <div class="rounded-pill fw-bold" id="ct-btn">자기계발</div>
                        </div>
                        <div>
                            <button
                                class="btn btn-outline-secondary text-black rounded-pill"
                                style="
                                    width: 80px;
                                    height: 40px;
                                    font-size: 15px;
                                    border-color: lightgray;
                                "
                            >
                                <i class="bi bi-pencil-fill"></i>
                                수정
                            </button>
                        </div>
                    </div>
                    <div id="intro_box" class="bg-light p-4 mt-3">자기소개가 없습니다.</div>
                </div>
            </div>

            <hr class="border-2" />
            <div class="d-flex justify-content-evenly" id="tab-menu">
                <p class="mt-3 fw-bold fs-6">
                    <i class="bi bi-house-door me-2 fs-2"></i>
                    내역
                </p>
                <div class="vl mt-1" style="height: 70px"></div>
                <p class="mt-3 fw-bold fs-6">
                    <i class="bi bi-heart me-2 fs-3"></i>
                    좋아요
                </p>
            </div>
            <hr class="border-2" />
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
#pro {
    width: 100%;
}
.vl {
    border-left: solid 1px;
    color: #dfd7d7;
}

#tab-menu {
    text-align: center;
}

#ct-btn {
    background-color: #ebf0f7;
    border: none;
    color: #558ccf;
    font-size: 14px;
    padding: 10px 15px;
    height: 40px;
}
#proimg {
    border-radius: 50%;
    width: 150px;
    margin: 10px 0;
}
#intro_box {
    width: 100%;
}
</style>
