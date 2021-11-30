const Footer = () => {
    return (
        <footer className="u-clearfix u-custom-color-2 u-footer u-footer" id="sec-1ced">
            <div className="section footer-section section-pad-md no-pb">
                <div className="ui-shape ui-shape-light ui-shape-footer" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm">
                            <div className="widget-item col-lg-6">
                                <img src="/images/logo2.png" alt="logo" />
                                <img className="logo logo-light" alt="logo" src="/images/logotext.png" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm" style={ { paddingTop: '50px', textAlign: 'center' } }>
                            <div className="widget-item">
                                <h5 className="widget-title">About us</h5>
                                <ul className="widget-links">
                                    <li><a href="#about">Overview</a></li>
                                    <li><a href="#tokenomic">Token metrics </a></li>
                                    <li><a href="#game-intro">Game play</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm" style={ { paddingTop: '50px', textAlign: 'center' } }>
                            <div className="widget-item">
                                <h5 className="widget-title">Social</h5>
                                <ul className="widget-links">
                                    <li><a target="_blank" rel="noreferrer" href="https://twitter.com/ShibaMetaWar">Twitter</a></li>
                                    <li><a target="_blank" rel="noreferrer" href="https://t.me/Shibametawarofficial">Telegram</a></li>
                                    <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/shiba_metawar/">Instagram </a></li>
                                    <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/shibwarasia/">Facebook</a></li>   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </footer>
    )
};

export default Footer;
