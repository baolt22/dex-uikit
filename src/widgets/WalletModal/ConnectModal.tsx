/** @jsxImportSource theme-ui */
import React from "react";
import { Link } from "../../components/Link";
import { HelpIcon } from "../../components/Svg";
import { Modal } from "../Modal";
import WalletCard from "./WalletCard";
import config from "./config";
import { Login } from "./types";
import { Flex } from "../../components/Flex";

interface Props {
  login: Login;
  t: (key: string) => string;
}

const ConnectModal: React.FC<Props> = ({ login, t }) => (
  <Modal title={t("Connect to a wallet")} maxWidth="400px" minWidth="350px">
    <Flex sx={{ overflowY: "scroll", flexDirection: "column", maxHeight: "400px" }}>
      {config.map((entry, index) => (
        <WalletCard
          key={entry.title}
          login={login}
          walletConfig={entry}
          mb={index < config.length - 1 ? "8px" : "0"}
          t={t}
        />
      ))}
    </Flex>
  </Modal>
);

export default ConnectModal;
