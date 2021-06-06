import React, {Component} from 'react';
import {Link} from "react-router-dom";

export class Home extends Component {

    componentDidMount() {
        if (this.props.user) {
            /*
            Eğer kimliklendirme başarılı ise kullanıcının galibiyet ve yenilgi sayıları gibi bilgileri
            güncellememiz gerekmektedir.
             */
            this.props.fetchAndUpdateUserInfo();
        }
    }

    render() {
        const user = this.props.user;
        const loggedIn = user !== null && user !== undefined;


        return (
            <div>
                <h2>Kart Oyunu</h2>
                <p className="welcome-text">
                    Bu oyunda 3 kapalı kart içindeki kediyi bulman gerekmektedir. İlk
                    tercihte kedi kartını bulamaz isen 2. seçim hakkı tanınacaktır.
                </p>

                <p> Aktif kullanıcı sayısı: {this.props.userCount}</p>

                {loggedIn ? (
                    <div>
                        <div className="action">
                            <Link className="play" to={"/game"} >Oyna</Link>
                        </div>

                    </div>
                ) : (
                    <p>Oynamak için giriş yapmanız gerekmektedir!</p>
                )}

            </div>
        );
    }
}