import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './PaymentPage.css';
import eventPoster from '../../assets/images/banners/classroom2.jpg';
import ovo from '../../assets/images/payment/ovo.png';
import gopay from '../../assets/images/payment/Gopay.png';
import indomaret from '../../assets/images/payment/indomaret.png';
import alfamart from '../../assets/images/payment/alfamart.png';
import mandiri from '../../assets/images/payment/mandiri.png';
import bca from '../../assets/images/payment/bca.png';
import bni from '../../assets/images/payment/bni.png';
import bri from '../../assets/images/payment/bri.png';
import visa from '../../assets/images/payment/visa.png';
import mastercard from '../../assets/images/payment/masstercard.png';
import xyz from '../../assets/images/payment/xyz.png';
const PaymentPage = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  return (
    <div className="payment-page">
      <Header />
      
      <section className="course-banner">
          <div className="banner-content">
            <h2>UX Designer: Digital Product Development</h2>
            {formData && (
              <div className="registration-info">
                <p>Registered: {formData.firstName} {formData.lastName}</p>
                <p>Email: {formData.email}</p>
              </div>
            )}
            <div className="instructor">
              <img 
                alt="User avatar icon" 
                src="https://storage.googleapis.com/a1aa/image/4713a379-35db-44fc-75b0-afb50c5f727c.jpg" 
              />
              <div className='keterangan-baner'>
                <span>Dimounitif Nelaspaba</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="info">
                Kategori <span className="info-bold">UI/UX</span>
              </span>
            </div>
              <span className="info-bold">Rp. 0</span>
          </div>
                      <img src={eventPoster} alt="Event poster" className="poster-image" />
        </section>
      <main className="payment-main">
        
            <h3>Payment Method</h3>
        <div className="payment-content">
          <div className="payment-methods">
            {/* E-Wallet */}
            <section className="payment-section">
              
              <h4>E-Wallet</h4>
              <div className='keterangan'>
                  <span>Transaksi terhubung dengan akun e-wallet</span>
                </div>
              <form className="payment-options">
                <label className="payment-option">
                  <input type="radio" name="ewallet" value="ovo" />
                  <img src={ovo} alt="OVO" />
                  <span>OVO</span>
                </label>
                <label className="payment-option">
                  <input type="radio" name="ewallet" value="gopay" />
                  <img src={gopay} alt="GO-PAY" />
                  <span>GO-PAY</span>
                </label>
              </form>
            </section>

            {/* Transfer Bank */}
            <section className="payment-section">
              <h4>Transfer Bank</h4>
              <div className='keterangan'>
                  <span>Transaksi perlu upload bukti transfer untuk proses verifikasi</span>
                </div>
              <form className="payment-options">
                <label className="payment-option">
                  <input type="radio" name="transferbank" value="bankxyz" />
                  <img src={xyz} alt='XYZ' />
                  <span>BANK XYZ</span>
                </label>
              </form>
            </section>

            {/* Transfer Virtual Account */}
            <section className="payment-section">
              <h4>Transfer Virtual Account</h4>
                <div className='keterangan'>
                  <span>Transaksi di cek otomatis</span>
                </div>
              <form className="payment-options">
                <label className="payment-option">
                  <input type="radio" name="virtualaccount" value="mandiri" />
                  <img src={mandiri} alt="Mandiri" />
                  <span>BANK MANDIRI</span>
                </label>
                <label className="payment-option">
                  <input type="radio" name="virtualaccount" value="bca" />
                  <img src={bca} alt="BCA" />
                  <span>BANK BCA</span>
                </label>
                <label className="payment-option">
                  <input type="radio" name="virtualaccount" value="bni" />
                  <img src={bni} alt='BNI' />
                  <span>BANK BNI</span>
                </label>
                <label className="payment-option">
                  <input type="radio" name="virtualaccount" value="bri" />
                  <img src={bri} alt='BRI'/>
                  <span>BANK BRI</span>
                </label>
              </form>
            </section>

            {/* Kartu Kredit */}
            <section className="payment-section">
              <h4>Kartu Kredit</h4>
              <div className='keterangan'>
                <span>Transaksi dengan kartu kredit berlogo VISA/MASTERCARD</span>
              </div>
              <form className="payment-options">
                <label className="payment-option">
                  <input type="radio" name="kartu_kredit" value="visa_mastercard" />
                  <img src={visa} alt='VISA' />
                  <img src={mastercard} alt='MASTERCARD' />
                  <span>VISA MASTERCARD</span>
                </label>
              </form>
            </section>

            {/* Minimarket */}
            <section className="payment-section">
              <h4>Minimarket</h4>
              <div className='keterangan'>
                  <span>Transaksi di gerai retial terdekat dengan biaya layanan tambahan</span>
                </div>
              <form className="payment-options">
                <label className="payment-option">
                  <input type="radio" name="minimarket" value="indomart" />
                  <img src={indomaret} alt="Indomaret" />
                  <span>INDOMARET</span>
                </label>
                <label className="payment-option">
                  <input type="radio" name="minimarket" value="alfamart" />
                  <img src={alfamart} alt="Alfamart" />
                  <span>ALFAMART</span>
                </label>
              </form>
            </section>
          </div>

          <aside className="payment-summary">
            <div>
              <h3>Total Price</h3>
              <div className="price-details">
                <div className="price-row">
                  <span>Price</span>
                  <span>Rp. 0</span>
                </div>
                <div className="price-row">
                  <span>Discount</span>
                  <span>Rp. 0</span>
                </div>
                <div className="price-row">
                  <span>Potongan Voucher</span>
                  <span>Rp. 0</span>
                </div>
              </div>

              <h3>Voucher</h3>
              <div className="voucher-input">
                <input type="text" placeholder="Input voucher code" />
                <button type="button">Use</button>
              </div>
            </div>

            <div>
              <div className="total-payment">
                <span>Total Payment</span>
                <span>Rp. 0</span>
              </div>
              <div className='keterangan'>
                <span>Dengan menyelesaikan pembelian, Anda menyetujui Ketentuan Layanan ini</span>
              </div>
              
              <button className="pay-button">Bayar Course</button>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentPage;