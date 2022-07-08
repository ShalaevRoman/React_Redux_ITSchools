import * as React from 'react';
import '../styles/headerInfo.scss';

const HeaderInfo = ({
                        schoolName,
                        schoolDescription,
                        goupsCount,
                        totalStudents}) => {
    return (
        <section className={'headerInfo_wrapper'}>
            <div>
                <h1 className={'headerInfo_title'}>{schoolName}</h1>
                <p>{schoolDescription}</p>
            </div>
            <div>
                <p>available groups: {goupsCount}</p>
                <p>Total amount of students: {totalStudents}</p>
            </div>
        </section>
    );
};

export default HeaderInfo;