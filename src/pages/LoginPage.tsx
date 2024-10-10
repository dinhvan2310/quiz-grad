import { useState } from "react";
import Row from "../components/Row";
import TabsComponent, { TabItemType } from "../components/Tabs";
import Text from "../components/Text";
import Logo from "../../src/assets/logo.png";
import Input from "../components/Input";
import Space from "../components/Space";
import CheckBox from "../components/CheckBox";
import Button from "../components/Button";

function LoginPage() {
    // state
    const [activeTab, setActiveTab] = useState("top");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    // options
    const headerTabs: TabItemType[] = [
        {
            label: "Top",
            key: "top",
        },
        {
            label: "How it works?",
            key: "howItWorks",
            disabled: true,
        },
        {
            label: "Features",
            key: "features",
            disabled: true,
        },
        {
            label: "About us",
            key: "aboutUs",
            disabled: true,
        },
        {
            label: "Login",
            key: "login",
        },
    ];

    return (
        <div
            className="
            bg-white 
            overflow-hidden
            h-screen
            max-w-screen-xl
            mx-auto
        "
        >
            {/* // Header ------------------ */}
            <header
                className="flex justify-between
                py-4
                border-b
            "
            >
                <Row>
                    <Text text="Quiz" type="logo" className="" />
                    <Text text="Grad" type="logo" className="text-primary" />
                </Row>
                <TabsComponent
                    items={headerTabs}
                    activeKey={activeTab}
                    onChange={(activeKey) => setActiveTab(activeKey)}
                />
            </header>
            {/* // Header ------------------ */}
            {/* // Main ------------------ */}
            <Row className="h-full p-4" justifyContent="space-between">
                <div style={{}}>
                    <Row>
                        <Text
                            text="Quiz"
                            type="logo"
                            style={{
                                fontSize: 92,
                                lineHeight: "92px",
                            }}
                        />
                        <Text
                            text="Grad"
                            type="logo"
                            className="text-primary"
                            style={{
                                fontSize: 92,
                                lineHeight: "92px",
                            }}
                        />
                    </Row>
                    <div className="w-full flex justify-end">
                        <div className="flex flex-col items-center">
                            <Text text="Welcome back!" type="paragraph" />
                            <Text
                                text="Please login / Signup to your account"
                                type="paragraph"
                            />
                        </div>
                    </div>
                    {/* // form ----------------- */}
                    <div
                        style={{
                            width: 520,
                        }}
                    >
                        <Input
                            required={true}
                            value={email}
                            onChange={setEmail}
                            label="Email"
                            className="mb-4"
                        />
                        <Input
                            required={true}
                            value={password}
                            onChange={setPassword}
                            label="Password"
                            type="password"
                        />
                        <Space height={16} />
                        <Row justifyContent="space-between">
                            <CheckBox
                                label="Remember me"
                                checked={rememberMe}
                                onChange={setRememberMe}
                            />
                            <Text text="Forgot password?" type="link" />
                        </Row>
                        <Space height={16} />
                        <Button
                            text="Login"
                            type="primary"
                            onClick={() => {}}
                        />
                        <Space height={16} />
                        <Text text="Register now" type="link" />
                    </div>
                    {/* // form ----------------- */}
                </div>
                <div>
                    <img
                        src={Logo}
                        alt="Logo"
                        style={{
                            width: 400,
                            height: 400,
                            objectFit: "cover",
                        }}
                    />
                </div>
            </Row>
            {/* // Main ------------------ */}
        </div>
    );
}

export default LoginPage;
