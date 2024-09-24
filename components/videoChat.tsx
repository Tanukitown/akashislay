import Image from "next/image";

const VideoChat = () => {
  return (
    <div className="mt-3">
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image alt="Vipo" src="/vipoUh.png" height={40} width={40} />
          </div>
        </div>
        <div className="chat-header">Vipo</div>
        <div className="chat-bubble chat-bubble-primary">
          Whose getting the big suck today?
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image alt="Ari" src="/ariTired.png" height={40} width={40} />
          </div>
        </div>
        <div className="chat-header">Ari</div>
        <div className="chat-bubble chat-bubble-error">
          Look for your black hole!
        </div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image alt="Vipo" src="/vipoUh.png" height={40} width={40} />
          </div>
        </div>
        <div className="chat-header">Vipo</div>
        <div className="chat-bubble chat-bubble-primary">It&apos;s Akashi!</div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image alt="Vipo" src="/vipoUh.png" height={40} width={40} />
          </div>
        </div>
        <div className="chat-header">Vipo</div>
        <div className="chat-bubble chat-bubble-primary">Wha-?!</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image alt="Rae" src="/raeTired.png" height={40} width={40} />
          </div>
        </div>
        <div className="chat-header">Rae</div>
        <div className="chat-bubble">Errhhhhh OH NO!</div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image alt="Vipo" src="/vipoUh.png" height={40} width={40} />
          </div>
        </div>
        <div className="chat-header">Vipo</div>
        <div className="chat-bubble chat-bubble-primary">Oh... OH....</div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image alt="Vipo" src="/vipoUh.png" height={40} width={40} />
          </div>
        </div>
        <div className="chat-header">Vipo</div>
        <div className="chat-bubble chat-bubble-primary">OHHHHHHHHHHH~</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <Image alt="Akashi" src="/akashiLMAO.png" height={40} width={40} />
          </div>
        </div>
        <div className="chat-header">Akashi</div>
        <div className="chat-bubble chat-bubble-warning">
          <Image
            src="/akashiSlay.png"
            alt="akashiSlay"
            height={200}
            width={200}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoChat;
