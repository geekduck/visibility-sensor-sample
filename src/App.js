import React, {useState, useEffect} from 'react';
import dayjs from 'dayjs';
import VisibilitySensor from 'react-visibility-sensor';
import './App.css';

const CurrentTimer = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [timerId, setTimerId] = useState(0);

    useEffect(() => {
        return () => clearInterval(timerId); // タイマーの後始末
    }, [timerId]);

    const onChange = (isVisible) => {
        if (isVisible) {
            // このコンポーネントが表示されている場合、タイマーで現在時刻を更新する。
            setTimerId(setInterval(() => {
                setCurrentTime(new Date());
            }, 10));
        } else {
            // このコンポーネントが表示されていない場合、タイマーを削除して現在時刻を更新しない。
            clearInterval(timerId);
            setTimerId(undefined);
        }
    };

    return (
        <VisibilitySensor
            onChange={onChange}
            partialVisibility={true} // 表示領域にちょっとでも入っていたらisVisible=trueと判定させる。
            offset={{top: 100, bottom: 100}} // 見た目でわかりやすいように、上下100pxの範囲は表示領域外にする。
        >
            <div className="CurrentTimer">{dayjs(currentTime).format('YYYY/MM/DD HH:mm:ss.SSS')}</div>
        </VisibilitySensor>
    );
};

function App() {
    return (
        <div className="App">
            <div className="upper-border"><span>表示領域外</span></div>
            <CurrentTimer/>
            <div className="lower-border"><span>表示領域外</span></div>
        </div>
    );
}

export default App;
