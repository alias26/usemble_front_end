<template>
    <div class="d-flex">
        <div class="text-start" id="profileInfoUpdate">
            <div class="mb-2 fs-4 fw-bold">프로필</div>
            <div class="mb-3 text-secondary">
                낯선 어셈블로 초대를 받기 위해 어떤 일/공부를 하고 계시는지 회원님에 대해
                알려주세요.
            </div>
            <hr />
            <img class="mt-2" id="proimg" src="../../../assets/photo31.jpg" alt="" />
            <div class="mx-2 my-3">
                <input id="file" type="file" multiple />
                <label for="file">
                    <div class="d-flex" id="imgbtn">
                        <span class="mx-2">프로필 이미지 수정</span>
                    </div>
                </label>
            </div>

            <div>
                <div class="mt-4 mb-1 fs-6 fw-bold text-black">자기소개 입력</div>
                <div class="rounded p-3 text-secondary fw-bold">
                    <textarea
                        type="text"
                        id="text-box"
                        placeholder="예) OOO에서 그래픽 디자이너로 일하고 있습니다. 일상의 무료함을 달래며 영감을 얻기 위해 어셈블을 시작하게 됐어요! 좋은 분들을 만나 즐거운 시간을 보낼 수 있었으면 좋겠습니다."
                    />
                </div>
            </div>
            <div class="mt-5 text-center">
                <button id="sub-btn">등록하기</button>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
#profileInfoUpdate {
    width: 100%;
    margin: 0 auto;
}

#text-box {
    width: 100%;
    height: 500px;
    font-size: 14px;
    padding: 20px 20px;
}

#sub-btn {
    align-items: center;
    width: 50%;
    height: 45px;
    background-color: #558ccf;
    border: none;
    color: white;
    font-size: 15px;
    border-radius: 7px 7px;
    font-weight: bold;
}
#proimg {
    border-radius: 50%;
    width: 150px;
}
#file {
    display: none;
}
#imgbtn {
    align-items: center;
    height: 45px;
    background-color: #57b17f;
    color: white;
    border: none;
    border-radius: 7px 7px;
    font-weight: bold;
    font-size: 14px;
    padding: 5px 7px;
}

textarea {
    resize: none;
}
</style>
