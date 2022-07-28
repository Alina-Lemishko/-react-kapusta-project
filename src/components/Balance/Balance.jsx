import { Fragment, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import s from './Balance.module.css';
import sprite from '../../images/sprite.svg';
// import BalanceModal from 'components/BalanceModal';
import routes from 'utils/routes';

const { app, reports } = routes;

const isReportPage = false;

const balanceRow = s.Balance;
const balanceRowRevers = s.BalanceRevers;
const classBalance = isReportPage ? balanceRowRevers : balanceRow;

export default function Balance() {
  const [balance, setBalance] = useState(0);

  const handleChange = e => {
    setBalance(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(e);
  };

  return (
    <Fragment>
      <div className={classBalance}>
        {isReportPage && (
          <Link to={app} className={s.linkToHome}>
            <svg width="18" height="12">
              <use href={`${sprite}#arrow-to-main-icon`}></use>
            </svg>
            <p className={s.linkToHomeText}>Main page</p>
          </Link>
        )}

        <div className={s.wraper}>
          {isReportPage ? (
            <div className={s.currentPeriod}>
              <p className={s.currentPeriodText}>Current period:</p>
              <div className={s.monthChange}>
                <button type="button" className={s.monthChangeBtn}>
                  <svg width={4} height={10}>
                    <use href={`${sprite}#arrow-prev-icon`}></use>
                  </svg>
                </button>
                <p className={s.monthChangeTxt}>November 2019</p>
                <button type="button" className={s.monthChangeBtn}>
                  <svg width={4} height={10}>
                    <use href={`${sprite}#arrow-next-icon`}></use>
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <Link to={reports} className={s.linkReports}>
              Reports
              <svg width="14" height="14" className={s.reportsIcon}>
                <use href={`${sprite}#report-icon`}></use>
              </svg>
            </Link>
          )}

          {!isReportPage ? (
            <form className={s.form} onSubmit={handleSubmit}>
              <label className={s.label}>
                <span className={s.labelText}>Balance:</span>

                <input
                  className={s.input}
                  type="number"
                  // placeholder="00.00 UAH"
                  name="balance"
                  value={balance}
                  onChange={handleChange}
                />
                {!isReportPage && (
                  <button type="submit" className={s.buttonForm}>
                    Confirm
                  </button>
                )}
              </label>
            </form>
          ) : (
            <div className={s.balanceWraper}>
              <p className={s.balanceTxt}>Balance:</p>
              <p className={s.inputReports}>00.00 UAH</p>
            </div>
          )}
        </div>
        {/* <BalanceModal /> */}
      </div>
      <div>
        <Outlet />
      </div>
    </Fragment>
  );
}
