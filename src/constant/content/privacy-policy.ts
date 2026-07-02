import type { LegalDocumentContent } from "./legal-types";

export const privacyPolicy = {
  title: "Privacy Policy",
  intro: [
    "Get A Ticket respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect information when you visit our website, submit an enquiry, or use our services.",
    "By using our website, you agree to the practices described in this Privacy Policy.",
  ],
  sections: [
    {
      id: "information-we-collect",
      title: "Information We Collect",
      blocks: [
        {
          paragraphs: ["We may collect the following information:"],
        },
        {
          heading: "Information You Provide",
          list: [
            "Name",
            "Email address",
            "Telephone number",
            "Travel preferences and enquiry details",
            "Information submitted through contact forms or booking enquiry forms",
          ],
        },
        {
          heading: "Automatically Collected Information",
          paragraphs: [
            "When you visit our website, we may automatically collect:",
          ],
          list: [
            "IP address",
            "Browser type and version",
            "Device information",
            "Pages visited",
            "Date and time of visits",
            "Referring website information",
          ],
        },
      ],
    },
    {
      id: "how-we-use-your-information",
      title: "How We Use Your Information",
      blocks: [
        {
          paragraphs: ["We may use your information to:"],
          list: [
            "Respond to travel enquiries",
            "Provide flight and holiday information",
            "Process booking requests and service enquiries",
            "Communicate regarding your enquiry or booking",
            "Improve our website and customer experience",
            "Prevent fraud and maintain website security",
            "Comply with legal and regulatory obligations",
          ],
        },
      ],
    },
    {
      id: "marketing-communications",
      title: "Marketing Communications",
      blocks: [
        {
          paragraphs: [
            "If you provide your contact details, we may contact you regarding your enquiry or services that may be relevant to your travel interests.",
            "You may opt out of marketing communications at any time by contacting us or following the unsubscribe instructions included in our communications.",
          ],
        },
      ],
    },
    {
      id: "cookies-and-tracking",
      title: "Cookies and Tracking Technologies",
      blocks: [
        {
          paragraphs: [
            "Our website may use cookies and similar technologies to improve website functionality, analyse traffic, and enhance user experience.",
          ],
          listIntro: "Cookies may be used to:",
          list: [
            "Remember user preferences",
            "Measure website performance",
            "Understand visitor behaviour",
            "Support advertising and marketing activities",
          ],
        },
        {
          paragraphs: [
            "You can control or disable cookies through your browser settings.",
          ],
        },
      ],
    },
    {
      id: "google-ads-and-analytics",
      title: "Google Ads and Analytics",
      blocks: [
        {
          paragraphs: [
            "We may use services provided by Google, including Google Ads and Google Analytics, to understand website usage and improve our advertising efforts.",
            "These services may collect information through cookies and similar technologies. Information collected may include website interactions, device information, and browsing activity.",
          ],
        },
      ],
    },
    {
      id: "third-party-service-providers",
      title: "Third-Party Service Providers",
      blocks: [
        {
          paragraphs: [
            "We may share information with trusted third-party providers who assist us in operating our business and delivering services, including:",
          ],
          list: [
            "Payment providers",
            "Technology and hosting providers",
            "Customer support providers",
            "Marketing and analytics providers",
            "Travel suppliers and booking partners",
          ],
        },
        {
          paragraphs: [
            "These providers are only permitted to use information as necessary to perform services on our behalf.",
          ],
        },
      ],
    },
    {
      id: "data-security",
      title: "Data Security",
      blocks: [
        {
          paragraphs: [
            "We take reasonable administrative, technical, and organisational measures to protect personal information against unauthorised access, disclosure, alteration, or destruction.",
            "While we strive to protect your information, no method of transmission over the internet can be guaranteed to be completely secure.",
          ],
        },
      ],
    },
    {
      id: "data-retention",
      title: "Data Retention",
      blocks: [
        {
          paragraphs: [
            "We retain personal information only for as long as necessary to fulfil the purposes described in this Privacy Policy or as required by applicable law.",
          ],
        },
      ],
    },
    {
      id: "your-rights",
      title: "Your Rights",
      blocks: [
        {
          paragraphs: [
            "Depending on applicable laws, you may have rights regarding your personal information, including:",
          ],
          list: [
            "Access to your personal information",
            "Correction of inaccurate information",
            "Deletion of personal information",
            "Restriction of processing",
            "Objection to certain uses of data",
            "Withdrawal of consent where applicable",
          ],
        },
        {
          paragraphs: [
            "Requests relating to personal information can be submitted using the contact details below.",
          ],
        },
      ],
    },
    {
      id: "childrens-privacy",
      title: "Children's Privacy",
      blocks: [
        {
          paragraphs: [
            "Our services are not directed toward children under the age of 16. We do not knowingly collect personal information from children.",
          ],
        },
      ],
    },
    {
      id: "third-party-websites",
      title: "Third-Party Websites",
      blocks: [
        {
          paragraphs: [
            "Our website may contain links to third-party websites. We are not responsible for the privacy practices, content, or policies of external websites.",
          ],
        },
      ],
    },
    {
      id: "changes-to-this-policy",
      title: "Changes to This Policy",
      blocks: [
        {
          paragraphs: [
            "We may update this Privacy Policy from time to time. Any changes will be posted on this page along with the updated effective date.",
          ],
        },
      ],
    },
  ],
} satisfies LegalDocumentContent;
