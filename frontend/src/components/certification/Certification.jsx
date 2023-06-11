import { FaCloudUploadAlt } from "react-icons/fa";
import Certificate from "../images/certification.jpeg";
import "./certification.css";
import { ReactComponent as CheckIcon } from "../images/icon/check-line.svg";

const Certification = [
  {
    name: "REG NAME: ",
    description: "FINANCE UK INVESTMENT INVESTMENTS PTE. LTD",
    icon: CheckIcon,
  },
  {
    name: "UEN: 200900554K",
    description: "200900554K",
    icon: CheckIcon,
  },
  {
    name: "Industry:",
    description: " CORPORATE FINANCE ADVISORY SERVICES",
    icon: CheckIcon,
  },
];

export default function Example() {
  return (
    <div className="overflow-hidden bdy bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base head font-semibold leading-7 text-indigo-600">
                COMPANY LEGAL STATUS
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                A large amount of our company's resources is devoted to making
                investments more affordable. The company is registered in
                Singapore and has passed all the checks to ensure its customers
                the reliability and stability of the investment. We look forward
                to effective work and cooperation with our customers and
                partners, and we will make all the necessary efforts for the
                successful development of the company.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                {Certification.map((feature) => (
                  <div
                    key={feature.name}
                    className="relative pl-9 details"
                  >
                    <feature.icon className="absolute left-1  check top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                    <dt className="inline font-semibold text-900">
                      {feature.name}
                    </dt>
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={Certificate}
            alt="certificate"
            className="w-[40rem] max-w-none certificate rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
