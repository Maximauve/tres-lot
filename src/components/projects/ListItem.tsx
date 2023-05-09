interface Props {
	title: string;
}

const ListItem: React.FC<Props> = (props: Props) => {
    const { title } = props;

    return (
		<a className="card" href="/home">
			<div className="card-tags">
				<div className="card-tag">
					<button className="tag" style={{backgroundColor: "#000"}}></button>
				</div>
				<div className="card-tag">
					<button className="tag" style={{backgroundColor: "#fff"}}></button>
				</div>
				<div className="card-tag">
					<button className="tag" style={{backgroundColor: "#21e"}}></button>
				</div>
				<div className="card-tag">
					<button className="tag" style={{backgroundColor: "#541"}}></button>
				</div>
			</div>
			<span className="card-title">{title}</span>
			<div className="card-members">
				<div className="member">
					<img src="https://i.imgur.com/JSW6mEk.png" alt="member" />	
				</div>
			</div>
		</a>
    )
}


export default ListItem;