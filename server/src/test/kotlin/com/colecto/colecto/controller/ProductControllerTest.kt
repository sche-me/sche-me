import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers
import org.springframework.test.web.servlet.result.MockMvcResultHandlers
import org.junit.jupiter.api.Test

@WebMvcTest
@AutoConfigureMockMvc
class ProductControllerTest {

  @Autowired
  private lateinit var mockMvc: MockMvc

  @Test
  fun findAll() {
    val uri: String = "/product"
    mockMvc.perform(MockMvcRequestBuilders.get(uri))
           .andExpect(MockMvcResultMatchers.status().isOk)
  }
}
