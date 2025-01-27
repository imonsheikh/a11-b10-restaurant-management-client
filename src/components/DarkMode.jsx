
const DarkMode = () => {

    const setDarkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark')
    }
    const setLightMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'light')
    }

    const toggleTheme = (e) => {
        if(!e.target.checked){
            setDarkMode()
        }else{
            setLightMode()
        }
    }
    return (
        <div className='md:mr-5 mr-1 items-center flex'>
            <input
  onChange={toggleTheme}          
  type="checkbox"
  className="toggle border-blue-500 bg-blue-500 [--tglbg:yellow] hover:bg-blue-700"
  defaultChecked />
        </div>
    );
};

export default DarkMode;