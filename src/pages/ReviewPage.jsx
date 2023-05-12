import React from 'react';

function ProfilePicture() {
    return (
      <div class="PPC">
        <img
          id="profilePic"
          src="https://pbs.twimg.com/profile_images/836420807085674497/fjDNEUsp_400x400.jpg"
        />
      </div>
    );
  }

function ReviewInput() {
    return (
        <div className='ReviewInput'>
            <textarea 
            class='ReviewInputText'
            placeholder='Escreva sua review aqui'
            />
        </div>
    )
}

function ReviewSendBtn() {
    return (
        <button id='ReviewSend'>
            Enviar Review!
        </button>
    )
}

function Estrelas() {
    return (
        <div className='estrelas'>★★★★★</div>
    )
}

function ReviewPage() {
    return (
        <body className='body-ReviewPage'>
            <div className='reviewWindow'>
                <div className='reviewContainer'>
                    <ProfilePicture />
                    <div className='ReviewWrite'>
                        <ReviewInput />
                        <Estrelas />
                        <ReviewSendBtn />
                    </div>
                </div>
            </div>
        </body>
    )
}

export default ReviewPage;