import useLocalStorage from "../hooks/useLocalStorage";

const LanguageSelector = () => {
  const [language, setLanguage] = useLocalStorage("language", "English");

  return (
    <div>
      <h1>Selected language</h1>
      <select
        value={language}
        onChange={(event) => setLanguage(event.target.value)}
      >
        <option value="English">English</option>
        <option value="Swedish">Swedish</option>
        <option value="Spanish">Spanish</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
