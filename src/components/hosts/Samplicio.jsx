import { Component } from 'react';
import '../../assets/styles/Samplicio.css';
import NavBar from '../header/NavBar';

class Samplicio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [],
			search: '',
			host: '',
			link: '',
			obs: '',
			addHostSection: 'add-host',
			searchResults: 'search-section',
			hasMatch: false,
		};
	}

	API_URL = 'http://localhost:5038';

	getData = '/api/jumpzoneapp/getnotes';

	postData = '/api/jumpzoneapp/AddNote';

	async refreshNotes() {
		const response = await fetch(this.API_URL + this.getData);
		const data = await response.json();
		this.setState({ notes: data });
	}

	componentDidMount() {
		this.refreshNotes();
	}

	handleHostChange = (event) => {
		this.setState({ host: event.target.value });
	};

	handleLinkChange = (event) => {
		this.setState({ link: event.target.value });
	};

	handleObsChange = (event) => {
		this.setState({ obs: event.target.value });
	};

	async addNote() {
		const { host, link, obs } = this.state;

		const response = await fetch(this.API_URL + this.postData, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				host,
				link,
				obs,
			}),
		});

		const data = await response.json();
		alert(data);
		this.refreshNotes();
	}

	handleSearchChange = (event) => {
		this.setState({ search: event.target.value });
	};

	handleClassChange = () => {
		this.setState({ addHostSection: 'add-host-section' });
	};

	handleSearchClassChange = () => {
		this.setState({ searchResults: 'search' });
	};

	render() {
		const { notes, search, host, link, obs } = this.state;
		const filteredNotes = notes.filter((note) => note.host.includes(search));

			return (
				<>
				<NavBar />
				<div className='samplicio-container'>
					<h1>Samplicio</h1>
	
					<div className={this.state.searchResults}>
						<button
							className='add-host-button'
							onClick={() => {
								this.handleClassChange();
								this.handleSearchClassChange();
							}}
						>
							Add host
						</button>
						<input
							className='search-input'
							type='text'
							value={search}
							onChange={this.handleSearchChange}
							placeholder='Search by Host'
						/>
						{search && filteredNotes.length > 0 ? (
							filteredNotes.map((note) => (
								<div
									key={note.id}
									className='search-results'
								>
									<h4>{note.host}</h4>
									<p>
										<b>Link: </b>
										{note.link}
									</p>
									<p>{note.obs}</p>
								</div>
							))
						) : !filteredNotes.length ? (
							<p className='search-results'>No matches found</p>
						) : ""}
					</div>
					<div className={this.state.addHostSection}>
						<input
							type='text'
							value={host}
							onChange={this.handleHostChange}
							placeholder='Host'
							className='host-input add-input'
						/>{' '}
						<input
							type='text'
							value={link}
							onChange={this.handleLinkChange}
							placeholder='add link'
							className='link-input add-input'
						/>{' '}
						<input
							type='text'
							value={obs}
							onChange={this.handleObsChange}
							placeholder='add a comment'
							className='obs-input add-input'
						/>{' '}
						<button
							className='add-button'
							onClick={() => {
								this.addNote();
								this.setState({ searchResults: 'search-section' });
								this.setState({ addHostSection: 'add-host' });
							}}
						>
							Add
						</button>
					</div>
				</div>
				</>
			);
	}
}

export default Samplicio;
