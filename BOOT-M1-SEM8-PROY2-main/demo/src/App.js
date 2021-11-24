import Main from './components/Main'

function App() {
  return (
    <div className="App">
      <header class="relative">
        <div class="bg-gray-900 pt-6">
          <nav class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
            <div class="flex items-center flex-1">
              <div class="flex items-center justify-between w-full md:w-auto">
                <a href="https://u-camp.utel.edu.mx/">
                  <img class="h-8 w-auto h-10 mb-5 sm:h-10" src="./logo-ucamp-dark.png" alt="" />
                </a>
              </div>
            </div>
            <div class="md:flex md:items-center md:space-x-6 text-base font-medium text-white hover:text-gray-300 border-white">
              Proyecto No. 2: Desarrollo de Software CRUD
            </div>
          </nav>
        </div>
      </header>
      <Main />
    </div>
  );
}

export default App;