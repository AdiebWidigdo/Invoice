import { FunctionComponent } from "react";
import styles from "./Invoice.module.css";

const Invoice: FunctionComponent = () => {
  return (
    <div className={styles.invoice}>
      <section className={styles.header}>
        <img className={styles.div1Icon} alt="" src="/div-1@2x.png" />
        <b className={styles.heading2}>INVOICE</b>
      </section>
      <section className={styles.section1}>
        <div className={styles.detailsData}>
          <div className={styles.topData}>
            <div className={styles.billTo}>
              <b className={styles.heading21}>BILL TO</b>
              <img className={styles.billToChild} alt="" src="/vector-1.svg" />
              <div className={styles.wfDigital}>WF Digital</div>
            </div>
            <div className={styles.billTo}>
              <b className={styles.heading22}>Project Details</b>
              <img className={styles.billToChild} alt="" src="/vector-1.svg" />
              <div className={styles.wfDigital}>Amazon Web Services</div>
            </div>
            <div className={styles.data}>
              <div className={styles.invoiceNo}>
                <b className={styles.heading23}>Invoice No :</b>
                <div className={styles.sky2024001}>SKY-2024/001</div>
              </div>
              <div className={styles.invoiceDate}>
                <b className={styles.heading23}>Invoice Date :</b>
                <div className={styles.sky2024001}>3 JAN 2024</div>
              </div>
              <div className={styles.invoiceDate}>
                <b className={styles.heading23}>Due Date</b>
                <div className={styles.sky2024001}>10 JAN 2024</div>
              </div>
            </div>
          </div>
          <div className={styles.attention}>
            <b className={styles.heading21}>ATTENTION</b>
            <img className={styles.billToChild} alt="" src="/vector-1.svg" />
            <div className={styles.wfDigital}>Andy</div>
          </div>
        </div>
      </section>
      <section className={styles.section2}>
        <div className={styles.table}>
          <div className={styles.titleRow}>
            <div className={styles.desc}>
              <div className={styles.description}>DESCRIPTION</div>
            </div>
            <div className={styles.remarks}>
              <div className={styles.totalUsd}>REMARKS</div>
            </div>
            <div className={styles.total}>
              <div className={styles.totalUsd}>TOTAL (USD)</div>
            </div>
          </div>
          <div className={styles.titleRow}>
            <div className={styles.rowDesc}>
              <div className={styles.dec2023Server}>
                Dec 2023 Server Maintenance for :
              </div>
            </div>
            <input className={styles.rowRemarks} type="text" />
            <input className={styles.rowTotal} type="text" />
          </div>
          <div className={styles.titleRow}>
            <div className={styles.rowDesc1}>
              <div className={styles.darrenpentajeucom}>
                Darren@pentajeu.com
              </div>
            </div>
            <input className={styles.rowRemarks1} type="text" />
            <div className={styles.rowTotal1}>
              <div className={styles.usd1753806}> USD 17,538.06</div>
            </div>
          </div>
          <div className={styles.titleRow}>
            <input className={styles.rowDesc2} type="text" />
            <input className={styles.rowRemarks} type="text" />
            <input className={styles.rowTotal} type="text" />
          </div>
          <div className={styles.titleRow}>
            <input className={styles.rowDesc3} type="text" />
            <input className={styles.rowRemarks1} type="text" />
            <input className={styles.rowTotal3} type="text" />
          </div>
          <div className={styles.titleRow}>
            <input className={styles.rowDesc2} type="text" />
            <input className={styles.rowRemarks} type="text" />
            <input className={styles.rowTotal} type="text" />
          </div>
          <div className={styles.titleRow}>
            <input className={styles.rowDesc3} type="text" />
            <input className={styles.rowRemarks1} type="text" />
            <input className={styles.rowTotal3} type="text" />
          </div>
          <div className={styles.titleRow}>
            <input className={styles.rowDesc2} type="text" />
            <input className={styles.rowRemarks} type="text" />
            <input className={styles.rowTotal} type="text" />
          </div>
          <div className={styles.titleRow}>
            <input className={styles.rowDesc3} type="text" />
            <input className={styles.rowRemarks1} type="text" />
            <input className={styles.rowTotal3} type="text" />
          </div>
          <div className={styles.titleRow}>
            <input className={styles.rowDesc2} type="text" />
            <input className={styles.rowRemarks} type="text" />
            <input className={styles.rowTotal} type="text" />
          </div>
          <div className={styles.titleRow}>
            <input className={styles.rowDesc3} type="text" />
            <input className={styles.rowRemarks1} type="text" />
            <input className={styles.rowTotal3} type="text" />
          </div>
          <div className={styles.titleRow}>
            <input className={styles.rowDesc2} type="text" />
            <input className={styles.rowRemarks} type="text" />
            <input className={styles.rowTotal} type="text" />
          </div>
        </div>
      </section>
      <section className={styles.section3}>
        <div className={styles.thankYouFor}>Thank you for your business!</div>
        <div className={styles.calculation}>
          <div className={styles.totalInfo}>
            <div className={styles.subtotal}>
              <b className={styles.heading27}>SUBTOTAL</b>
              <div className={styles.number}>
                <div className={styles.div}>USD 17,538.06</div>
                <img
                  className={styles.billToChild}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
            <div className={styles.subtotal}>
              <b className={styles.heading27}>Discount</b>
              <div className={styles.number}>
                <div className={styles.div}>(2,196.24)</div>
                <img
                  className={styles.billToChild}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
            <div className={styles.subtotal}>
              <b className={styles.heading27}>Subtotal Less DiscounT</b>
              <div className={styles.number}>
                <div className={styles.div}>USD 15,341.82</div>
                <img
                  className={styles.billToChild}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
            <div className={styles.subtotal}>
              <b className={styles.heading27}>ROUNDING ADJUSTMENT</b>
              <div className={styles.number}>
                <div className={styles.div}>-USD 0.02</div>
                <img
                  className={styles.billToChild}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
            <div className={styles.subtotal}>
              <b className={styles.heading27}>TOTAL</b>
              <div className={styles.number}>
                <div className={styles.div}>USD 15,341.80</div>
                <img
                  className={styles.billToChild}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.balanceDue}>
            <img className={styles.billToChild} alt="" src="/vector-2.svg" />
            <div className={styles.invoiceDate}>
              <div className={styles.heading212}>Balance Due</div>
              <b className={styles.usd15341801}>USD 15,341.80</b>
            </div>
            <img className={styles.billToChild} alt="" src="/vector-2.svg" />
          </div>
        </div>
      </section>
      <section className={styles.termsInstructions}>
        <div className={styles.heading213}>{`Terms & Instructions`}</div>
        <img className={styles.billToChild} alt="" src="/vector-1.svg" />
        <div className={styles.heading214}>
          Payment can be made to the following Wallet
        </div>
        <div className={styles.heading214}>
          TMi9B5zXJqTfy1oeN352PLnGsBr8pk9AQd - TRON (TRC20)
        </div>
      </section>
    </div>
  );
};

export default Invoice;
