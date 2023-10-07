import classNames from 'classnames/bind';

import styles from './dropDownMenu.module.scss';
import CrossArrow from '~/assets/icon/crossArrow.js'

const cx = classNames.bind(styles);

function DropDownMenu({ data }) {
    return (
    <>
        <li className={cx('container')}>
            <div className={cx('round-icon')}></div>
            <div className={cx('text')}>{data.text}</div>
            <div className={cx('drop-down-container')}>
                <div className={cx('drop-down-content')}>
                    <ul>
                        {
                            data.dropContent && data.dropContent.map((data, index) => {
                                return (
                                <li>
                                    {data.text} 
                                    {data.isArrow && <CrossArrow/>}
                                </li>
                                )
                            })
                        }
                    </ul>
                    
                </div>
            </div>
        </li>
        
    </>  
    );
}

export default DropDownMenu;
