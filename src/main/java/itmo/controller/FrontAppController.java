package itmo.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FrontAppController implements ErrorController {
    @RequestMapping(value = {"/", "/error"})
    public String getIndex() {
        return "index.html";
    }
}
