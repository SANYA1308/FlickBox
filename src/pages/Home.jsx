import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import request from '../Request';

const Home = () => {
    return (
        <>
            <Main/>
            <Row rowId='1' title='Upcoming' fetchURL={request.requestUpcoming}/>

            <Row rowId='2' title='Popular' fetchURL={request.requestPopular}/>

            <Row rowId='3' title='Trending' fetchURL={request.requestTrending}/>

            <Row rowId='4' title='Top Rated' fetchURL={request.requestTopRated}/>

            <Row rowId='5' title='Horror' fetchURL={request.requestHorror}/>
        </>
    )

}

export default Home;