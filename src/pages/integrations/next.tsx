import React from "react";
import {LandingPage} from "../../component/landingPages/LandingPage";
import {LandingPageHeadline} from "../../component/landingPages/LandingPageHeadline";
import {LandingPageDescription} from "../../component/landingPages/LandingPageDescription";
import {LandingPageInstallationStep} from "../../component/landingPages/LandingPageInstallationStep";
import {LandingPageInstallation} from "../../component/landingPages/LandingPageInstallation";
import {LandingPageInstallationCode} from "../../component/landingPages/LandingPageInstallationCode";
import {CoolButton} from "../../component/buttons/CoolButton";
import {CoolButtonText} from "../../component/buttons/CoolButtonText";
import Link from "@docusaurus/Link";
import {CoolButtonImage} from "../../component/buttons/CoolButtonImage";
import {baseBadges} from "../../component/landingPages/js/baseBadges";
import {ReactBaseFeatures} from "../../component/landingPages/js/ReactBaseFeatures";
import {ExampleAppLinkDescriptionParagraph} from "../../component/landingPages/common/ExampleAppLinkDescriptionParagraph";
import {InstallationStepCreateProjectInTolgeePlatform} from "../../component/landingPages/common/InstallationStepCreateProjectInTolgeePlatform";
import {ReactDocsCoolButton} from "../../component/landingPages/js/ReactDocsCoolButton";
import {ReactBaseParagraph} from "../../component/landingPages/ReactBaseParagraph";
import {ReactInstallationStepUseTComponent} from "../../component/landingPages/js/TeactInstallationStepUseTComponent";
import NextLogo from "../../../static/img/technologies/logo-next.svg";

export default () => {
  return (
    <LandingPage title={"Tolgee for Next"}>
      <LandingPageHeadline
        loveImage={{
          img: <NextLogo width={80} />,
          name: "Next.js",
        }}
        badges={baseBadges}
      >
        Tolgee for Next
      </LandingPageHeadline>
      <LandingPageDescription installationCommand="npm i @tolgee/react @tolgee/ui">
        <p>To use Tolgee with your Next application, use React integration library together with Next i18n support.</p>
        <ReactBaseParagraph/>
        <ExampleAppLinkDescriptionParagraph repoName={"next-example"} technologyName={"Next"}/>
      </LandingPageDescription>
      <ReactBaseFeatures technologyName="Next.js"/>
      <LandingPageInstallation>
        <InstallationStepCreateProjectInTolgeePlatform/>
        <LandingPageInstallationStep title="2. Setup Tolgee integration">
          <p>Install the npm packages.</p>
          <LandingPageInstallationCode>
            npm i @tolgee/react @tolgee/ui
          </LandingPageInstallationCode>
          <p>Prepare your next-config.js.</p>
          <LandingPageInstallationCode language="js">
            {nextConfigCode}
          </LandingPageInstallationCode>
          <p>Then wrap your code with TolgeeProvider</p>
          <LandingPageInstallationCode language="jsx" fullWidth={true}>
            {reactProviderCode}
          </LandingPageInstallationCode>
        </LandingPageInstallationStep>
        <ReactInstallationStepUseTComponent/>

        <LandingPageInstallationStep title="Explore the Docs and check out example app!">
          <p>Continue exploring...</p>

          <div style={{display: "flex", gap: "20px", flexWrap: 'wrap'}}>
            <ReactDocsCoolButton/>
            <CoolButton
              component={Link}
              to="/docs/web/using_with_react/ssr/using_with_next"
            >
              <CoolButtonText>Tolgee for Next Docs</CoolButtonText>
              <CoolButtonImage>📖</CoolButtonImage>
            </CoolButton>
            <CoolButton
              component={Link}
              to="https://github.com/tolgee/next-example"
            >
              <CoolButtonText>Tolgee + Next Example App</CoolButtonText>
              <CoolButtonImage>
                <img src="/img/github.svg" alt="GitHub"/>
              </CoolButtonImage>
            </CoolButton>
          </div>
        </LandingPageInstallationStep>
      </LandingPageInstallation>
    </LandingPage>
  );
};

const nextConfigCode = `/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    i18n: {
        locales: ['en', 'cs'],
        localeDetection: true,
        defaultLocale: "en"
    },
}`

const reactProviderCode = `import { TolgeeProvider } from "@tolgee/react";
import { UI } from "@tolgee/ui";
import enLocale from "../i18n/en.json";
import csLocale from "../i18n/cs.json";

export const Wrapper = () => {
  const {locale: activeLocale} = useRouter();
  
  return (
    <TolgeeProvider
      filesUrlPrefix="i18n/"
      apiUrl="https://app.tolgee.io"
      apiKey="<your api key>"
      ui={UI}
      forceLanguage={activeLocale}
      staticData={{
            en: enLocale,
            cs: csLocale
      }}
    >
      <App />
    </TolgeeProvider>
  );
}`;
