export function VideoCard(props: any) {
  return (
    <div>
      <img src={props.imageLink} className="rounded-xl" />
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1">
          <img src={props.thumbnail} className="rounded-full w-12 h-12" />
        </div>
        <div className="col-span-11 pt-2">
          <div>{props.title}</div>
          <div className="col-span-11 text-gray-400 text-base">
            {props.channelName}
          </div>
          <div className="col-span-11 text-gray-400 text-base">
            {props.views} | {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}
