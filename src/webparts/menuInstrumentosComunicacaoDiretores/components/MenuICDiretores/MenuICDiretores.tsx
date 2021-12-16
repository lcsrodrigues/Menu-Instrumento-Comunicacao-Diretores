import * as React from 'react';
import style from './style.module.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function MenuICDiretores({ absoluteUrl, webpartTitle }) {

    const [inGroup, setInGroup] = useState(false);

    useEffect(() => {
        function getGroups() {
            console.log(absoluteUrl);
            axios.get(absoluteUrl + "/_api/web/currentuser/?$expand=groups")
                .then(function (result) {
                    var myGroups = result.data.Groups;
                    myGroups.map(group => {
                        if (group.LoginName == "Diretores" || group.LoginName == "Presidentes") {
                            setInGroup(true);
                        }
                    })
                })
        };

        getGroups();

    }, [])

    if (inGroup) {
        return (
            <div className={style.box}>
                <div className={style.boxHeader}>
                    <span>{webpartTitle}</span>
                </div>
                <div className={style.boxItems}>
                    <a href={`${absoluteUrl}/Lists/Normativos/AllItems.aspx?viewid=1c76a5f4%2D900c%2D4f82%2Dbc2e%2Dcf77b390f8fc`}>
                        <div className={style.item}>
                            <div>
                                <span>Circular Reservada</span>
                            </div>
                        </div>
                    </a>
                    <a href={`${absoluteUrl}/Lists/Normativos/AllItems.aspx?viewid=ff880e25%2Deed9%2D4212%2D9513%2D4119cd9e6f7a`}>
                        <div className={style.item}>
                            <div>
                                <span>Comunicado Reservado</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        )
    } else {
        return <div></div>;
    }
}