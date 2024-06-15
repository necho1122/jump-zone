import { useState, useEffect } from 'react';
import '../../assets/styles/Samplicio.css';
import NavBar from '../header/NavBar';

const Samplicio = () => {
    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState('');
    const [hostName, setHost] = useState('');
    const [hostLink, setLink] = useState('');
    const [coments, setObs] = useState('');
    const [addHostSection, setAddHostSection] = useState('add-host');
    const [searchResults, setSearchResults] = useState('search-section');

    const API_URL = 'https://jump-zone-api.vercel.app';
    const getData = '/data';
    const postData = '/AddNote';

    const refreshNotes = async () => {
        const response = await fetch(API_URL + getData);
        const data = await response.json();
        setNotes(data);
    };

    useEffect(() => {
        refreshNotes();
    }, []);

    const handleHostChange = (event) => {
        setHost(event.target.value);
    };

    const handleLinkChange = (event) => {
        setLink(event.target.value);
    };

    const handleObsChange = (event) => {
        setObs(event.target.value);
    };

    const addNote = async () => {
        const response = await fetch(API_URL + postData, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                hostName,
                hostLink,
                coments,
            }),
        });

        const data = await response.json();
        alert(data);
        refreshNotes();
    };

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handleClassChange = () => {
        setAddHostSection('add-host-section');
    };

    const handleSearchClassChange = () => {
        setSearchResults('search');
    };

    const filteredNotes = notes.filter((note) => note.hostName.includes(search));

    return (
        <>
            <NavBar />
            <div className='samplicio-container'>
                <h1>Samplicio</h1>

                <div className={searchResults}>
                    <button
                        className='add-host-button'
                        onClick={() => {
                            handleClassChange();
                            handleSearchClassChange();
                        }}
                    >
                        Add host
                    </button>
                    <input
                        className='search-input'
                        type='text'
                        value={search}
                        onChange={handleSearchChange}
                        placeholder='Search by Host'
                    />
                    {search && filteredNotes.length > 0 ? (
                        filteredNotes.map((note) => (
                            <div
                                key={note._id}
                                className='search-results'
                            >
                                <h4>{note.hostName}</h4>
                                <p>
                                    <b>Link: </b>
                                    {note.hostLink}
                                </p>
                                <p>{note.coments}</p>
                            </div>
                        ))
                    ) : !filteredNotes.length ? (
                        <p className='search-results'>No matches found</p>
                    ) : ""}
                </div>
                <div className={addHostSection}>
                    <input
                        type='text'
                        value={hostName}
                        onChange={handleHostChange}
                        placeholder='Host name'
                        className='host-input add-input'
                    />{' '}
                    <input
                        type='text'
                        value={hostLink}
                        onChange={handleLinkChange}
                        placeholder='Add link'
                        className='link-input add-input'
                    />{' '}
                    <input
                        type='text'
                        value={coments}
                        onChange={handleObsChange}
                        placeholder='Add a comment'
                        className='obs-input add-input'
                    />{' '}
                    <button
                        className='add-button'
                        onClick={() => {
                            addNote();
                            setSearchResults('search-section');
                            setAddHostSection('add-host');
                        }}
                    >
                        Add
                    </button>
                </div>
            </div>
        </>
    );
};

export default Samplicio;
