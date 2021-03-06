import React from 'react';
import globalStyles from '../bootstrap.min.module.css';
import cx from 'classnames';
import styles from './ProductListView.module.css';

const ProductListView = (props) => {
    console.log(props.product)
    const data = props.product;
    return(
        <div className={styles.listView}>

            <p className={styles.verified}>Verified 08/21/2016</p>

            <div>
                <img src={data.image} className={styles.fan} />
            </div>

            <div className={styles.largeDataDiv}>
                <div className={styles.largeDataLine}>{data.name}</div>
                <div className={styles.largeDataLine}>{data.series}</div>
                <div className={styles.largeDataLine}>{data.code}</div>
            </div>

            <div className={styles.strip}>
                <div className={styles.listViewData}>{data.technical_data.airflow} CFM</div>
                <div className={styles.listViewData}>{data.technical_data.power} W at max speed</div>
                <div className={styles.listViewData}>{data.technical_data.noise} dBA at max speed</div>
                <div className={styles.listViewData}>{data.technical_data.size} fan sweep diameter</div>
            </div>

            <div className={styles.pastSpecs}>
                <div className={styles.pastSpecsLine}>Past specifications:</div>
                <div className={styles.pastSpecsLine}>{data.past}</div>
            </div>


            <div className={styles.compareAdd}>
                <div className={cx(globalStyles["custom-control"], globalStyles["custom-checkbox"])}>
                    <input type="checkbox" className={cx(globalStyles["custom-control-input"], styles.customInput)} id={data.code} />
                    <label className={cx(globalStyles["custom-control-label"], styles.customLabel)} for={data.code}>Compare</label>
                </div>

                <div className={styles.addButton}>
                    <button className={cx(globalStyles.btn, globalStyles['btn-secondary'],
                        globalStyles['dropdown-toggle'], styles.Button)} type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Add to &nbsp;&nbsp;
                    </button>
                </div>
            </div>

        </div>
    )

}

export default ProductListView;

// className={cx(globalStyles.col, globalStyles['col-sm-2'], styles.column)}