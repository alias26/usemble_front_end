<template>
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css"
    />
    <div class="my-4 d-flex border" id="mypageForm">
        <div class="my-4" id="like">
            <div class="mb-5 text-center fw-bold fs-5">
                <i class="bi bi-heart me-1 fw-bold" style="font-size: 40px"></i>
                <p>좋아요</p>
            </div>
            <div class="hr"></div>
            <ul class="nav justify-content-around">
                <li class="nav-item">
                    <a class="nav-link p-3 fw-bold" aria-current="page">내가 찜한 호스트</a>
                </li>
            </ul>

            <div class="bg-light text-center" style="height: 500px">
                <div class="hr"></div>
                <div class="text-secondary align-content-center" style="font-size: 14px">
                    <!-- <div>아직 찜한 호스트가 없으시네요!</div>
                    <div class="mb-4">관심 있는 호스트를 찾아보세요.</div>
                    <button
                        class="p-3 bg-black text-white rounded-1 fw-bold"
                        style="font-size: 14px; border: none"
                    >
                        어셈블 둘러보기
                    </button> -->
                    <div id="like-host" class="d-flex p-5">
                        <div class="me-3" id="profile-image">
                            <img
                                src="@/assets/antkd.png"
                                style="width: 70px; height: 70px; border-radius: 50%"
                            />
                        </div>
                        <div class="text-start">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <div>호스트</div>
                                    <div class="d-flex mb-2 fs-6 fw-bold">
                                        <div class="text-black" id="host-name">호스트</div>
                                        <div class="text-black fw-bold">&nbsp;></div>
                                    </div>
                                </div>
                                <div class="d-flex">
                                    <button class="d-flex btn" id="like-btn">
                                        <i class="bi bi-heart-fill text-danger me-2"></i>
                                        <div>4</div>
                                    </button>
                                </div>
                            </div>

                            <div class="text-secondary" id="host-info">
                                안녕하세요 :) 저는 '공중도시'라는 공간을 운영중인 호스트이자,
                                식집사로 활동중입니다. 그림책을 좋아하고, 언젠가 애니메이션을
                                만들고자 하는 꿈이 있습니다. 여러 사람들과 다양한 주제로 이야기 하는
                                것을 좋아하고, 그 시간 안에서 많은 영감을 얻고 있습니다.
                            </div>
                        </div>
                    </div>
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

#like {
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
    width: 450px;
    color: gray;
}
.nav-link:focus {
    color: black;
    border-width: 450px;
    border-bottom: 3px solid black;
}

#host-info {
    width: 90%;
    overflow: auto;
    text-overflow: ellipsis;
}

#like-btn {
    justify-content: center;
    align-items: center;
    border-color: lightgray;
    width: 120px;
    height: 40px;
}
</style>
