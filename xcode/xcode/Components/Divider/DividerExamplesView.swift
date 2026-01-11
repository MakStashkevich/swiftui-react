
import SwiftUI

struct DividerExamplesView: View {
    var body: some View {
        List {
            VStack {
                Text("Above Divider")
                Divider()
                Text("Below Divider")
            }
            .navigationTitle("Horizontal Divider")
            
            HStack {
                Text("Left")
                Divider()
                Text("Right")
            }
            .frame(height: 50)
            .navigationTitle("Vertical Divider")
        }
        .navigationTitle("Divider Examples")
    }
}

struct DividerExamplesView_Previews: PreviewProvider {
    static var previews: some View {
        DividerExamplesView()
    }
}
