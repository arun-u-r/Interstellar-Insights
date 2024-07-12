import '../styles/sidebar.css';
import PropTypes from 'prop-types';
import Card from './Card';


const SideBar = (props) => {
    const { handleToggleModal, data } = props
    return (
        <div className="sidebar">
            <div className="sidebarContent" onClick={handleToggleModal}>
                <Card data={data} />
                <div className='description-container'>
                    <p> Mankind Was Born On Earth. It Was Never Meant To Die Here. 
                    </p>
                </div>
            </div>
        </div>
    );
};

SideBar.propTypes = {
    handleToggleModal: PropTypes.func,
    data: PropTypes.shape({
        copyright: PropTypes.string,
        date: PropTypes.string.isRequired,
        explanation: PropTypes.string.isRequired,
        hdurl: PropTypes.string,
        media_type: PropTypes.string.isRequired,
        service_version: PropTypes.string,
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    })
};

export default SideBar