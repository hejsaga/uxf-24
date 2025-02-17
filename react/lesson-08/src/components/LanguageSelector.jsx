import useLocalStorage from "../hooks/useLocalStorage";

const LanguageSelector = () => {
  const [language, setLanguage] = useLocalStorage("language", "English");

  return (
    <select
      value={language}
      onChange={(event) => setLanguage(event.target.value)}
    >
      <option value="English">English</option>
      <option value="Swedish">Swedish</option>
      <option value="Spanish">Spanish</option>
    </select>
  );
};

export default LanguageSelector;
